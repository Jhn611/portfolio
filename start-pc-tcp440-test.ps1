$xray = 'D:\Apps\v2rayN-windows-64\bin\xray\xray.exe'
if (!(Test-Path $xray)) {
  $xray = 'D:\Apps\v2rayN-windows-64-desktop\v2rayN-windows-64\bin\xray\xray.exe'
}

$config = 'D:\Projects\portfolio\portfolio\pc-tcp440-test.json'
$existing = Get-NetTCPConnection -LocalPort 18090 -State Listen -ErrorAction SilentlyContinue
if (!$existing) {
  Start-Process -FilePath $xray -ArgumentList @('run', '-config', $config) -WindowStyle Hidden
  Start-Sleep -Seconds 2
}

Get-NetTCPConnection -LocalPort 18090 -State Listen -ErrorAction SilentlyContinue |
  Select-Object LocalAddress, LocalPort, OwningProcess |
  Format-List

curl.exe --max-time 20 --proxy http://127.0.0.1:18090 https://api.ipify.org
curl.exe --max-time 20 -I --proxy http://127.0.0.1:18090 https://example.com
