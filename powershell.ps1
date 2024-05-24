# ログイン
Connect-AzAccount

# リソースグループの作成
$resourceGroupName = "myResourceGroup"
$location = "westeurope"
New-AzResourceGroup -Name $resourceGroupName -Location $location

# ストレージアカウントの作成
$storageAccountName = "mystorageaccount"
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS