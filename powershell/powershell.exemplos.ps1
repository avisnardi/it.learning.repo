<#

$message = "Numbers: "
foreach($number in 1..10)
{
    $message += " $number"
    Write-output $message
}

Write-output "###########################################################"

# Get-Process | Get-Member -MemberType Properties


#>

Write-output "###########################################################"


Get-ChildItem -Path "C:\3FMeS\SCL\log\historicMessageReceiver" |
  Where-Object {$_.Name -match '\.017\.'} |
  Where-Object {$_.CreationTime -lt (Get-Date).AddDays(-5)} |
  Sort-Object -Property LastWriteTime, Name |

Write-output "###########################################################"


Get-Content C:\3FMeS\DPM\log\exec_scl_start_of_day_flow.log -Tail 10 | findstr /R /C:"[syncAccountWithChildren]"


Get-Content "C:\3FMeS\LOG\FMS-FIX-ENGINE\fms-fix-engine-stdout.2022-08-16.log" -Tail 10

