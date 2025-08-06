# Script pour corriger l'encodage des caractères français

$files = @(
    "src\index.html",
    "src\app\components\hero\hero.component.ts", 
    "src\app\components\about\about.component.ts",
    "src\app\components\skills\skills.component.ts",
    "src\app\components\projects\projects.component.ts",
    "src\app\components\navigation\navigation.component.ts",
    "src\app\components\footer\footer.component.ts",
    "src\app\services\seo.service.ts"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Corrections d'encodage communes
        $content = $content -replace "├®", "é"
        $content = $content -replace "├á", "à" 
        $content = $content -replace "├¨", "è"
        $content = $content -replace "├®", "ê"
        $content = $content -replace "├¬", "î"
        $content = $content -replace "├´", "ô"
        $content = $content -replace "├╣", "ù"
        $content = $content -replace "├º", "û"
        $content = $content -replace "├ж", "ç"
        $content = $content -replace "┬«", "«"
        $content = $content -replace "┬»", "»"
        $content = $content -replace "├á├á", "àà"
        $content = $content -replace "ma├«", "maî"
        
        # Écrire le fichier corrigé
        $content | Out-File $file -Encoding UTF8 -NoNewline
        Write-Host "Corrigé: $file"
    }
}

Write-Host "Correction d'encodage terminée!"
