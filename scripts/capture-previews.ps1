param([string[]]$Only)

Add-Type -AssemblyName System.Drawing

$dir = 'd:\Portfolio\public\previews'
New-Item -ItemType Directory -Force -Path $dir | Out-Null

$targets = [ordered]@{
  'shipmentpro' = 'https://shipment-pro.vercel.app'
  'slingshot'   = 'https://slinggame-web.vercel.app'
  'secuscan'    = 'https://secuscan.in'
  'gitverse'    = 'https://gitverse-tan.vercel.app'
  'silentlink'  = 'https://silentlink-gamma.vercel.app'
  'envforge'    = 'https://env-forage.vercel.app'
  'waggle'      = 'https://pypi.org/project/waggle-mcp/'
  'gssoc'       = 'https://gssoc.girlscript.org/profile/19927e4f-5a5c-40d8-bbc8-0007ab6ff0e2'
  'leetcode'    = 'https://leetcode.com/u/Nissy_Niveditha/'
  'codechef'    = 'https://www.codechef.com/users/mrew23rh1a05rg'
  'hackerrank'  = 'https://www.hackerrank.com/profile/v_nissynivedith1'
}

function Save-Jpeg16x9 {
  param([string]$Raw, [string]$Out)

  $img = [System.Drawing.Image]::FromFile($Raw)
  try {
    $srcW = $img.Width
    $srcH = [Math]::Min($img.Height, [int]($img.Width * 9 / 16))

    $bmp = New-Object System.Drawing.Bitmap 1440, 810
    $gfx = [System.Drawing.Graphics]::FromImage($bmp)
    try {
      $gfx.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $gfx.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $gfx.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, 1440, 810), 0, 0, $srcW, $srcH, [System.Drawing.GraphicsUnit]::Pixel)
    } finally { $gfx.Dispose() }

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $params = New-Object System.Drawing.Imaging.EncoderParameters 1
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 84L
    $bmp.Save($Out, $codec, $params)
    $bmp.Dispose()
    "  ->  $Out  ($([Math]::Round((Get-Item $Out).Length / 1KB)) KB)"
  } finally { $img.Dispose() }
}

foreach ($name in $targets.Keys) {
  if ($Only -and ($Only -notcontains $name)) { continue }

  $enc = [uri]::EscapeDataString($targets[$name])
  $api = "https://api.microlink.io/?url=$enc&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900"
  $raw = Join-Path $dir "_raw_$name.png"
  $jpg = Join-Path $dir "$name.jpg"

  if (Test-Path $jpg) { Remove-Item $jpg -Force }

  $ok = $false
  for ($attempt = 1; $attempt -le 3 -and -not $ok; $attempt++) {
    try {
      Invoke-WebRequest -Uri $api -OutFile $raw -UseBasicParsing -TimeoutSec 120
      "OK   $name (attempt $attempt)"
      Save-Jpeg16x9 -Raw $raw -Out $jpg
      $ok = $true
    } catch {
      "RETRY $name attempt $attempt :: $($_.Exception.Message)"
      Start-Sleep -Seconds 4
    }
  }

  if (-not $ok) { "FAIL $name" }
  if (Test-Path $raw) { Remove-Item $raw -Force }
  Start-Sleep -Seconds 2
}

'---'
Get-ChildItem $dir | Select-Object Name, @{ n = 'KB'; e = { [Math]::Round($_.Length / 1KB) } } | Format-Table -AutoSize
