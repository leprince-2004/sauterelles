$ErrorActionPreference = 'Stop'

$repositoryRoot = Split-Path -Parent $PSScriptRoot
$packageName = 'site-package-' + (Get-Date -Format 'yyyyMMdd-HHmmss')
$packagePath = Join-Path $PSScriptRoot $packageName
$archivePath = "$packagePath.zip"

New-Item -ItemType Directory -Path $packagePath | Out-Null
Get-ChildItem -Path $repositoryRoot -Filter '*.html' -File |
    Copy-Item -Destination $packagePath
Copy-Item -Path (Join-Path $repositoryRoot 'assets') -Destination $packagePath -Recurse

Compress-Archive -Path (Join-Path $packagePath '*') -DestinationPath $archivePath -CompressionLevel Optimal

Write-Output "Package directory: $packagePath"
Write-Output "Package archive: $archivePath"