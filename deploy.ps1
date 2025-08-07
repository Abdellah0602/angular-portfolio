# Script de déploiement pour GitHub Pages
# Usage: .\deploy.ps1

Write-Host "🚀 Déploiement en cours..." -ForegroundColor Green

# Build de production
Write-Host "📦 Build de production..." -ForegroundColor Yellow
ng build --configuration production

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build réussi!" -ForegroundColor Green
    
    # Nettoyage du dossier docs
    Write-Host "🧹 Nettoyage du dossier docs..." -ForegroundColor Yellow
    if (Test-Path "docs") {
        Remove-Item -Recurse -Force "docs"
    }
    
    # Copie vers docs
    Write-Host "📁 Copie vers le dossier docs..." -ForegroundColor Yellow
    Copy-Item -Recurse "dist\abdellah-portfolio\*" "docs\"
    
    # Vérifier et créer le dossier assets si nécessaire
    if (-not (Test-Path "docs\assets")) {
        Write-Host "📁 Création du dossier assets..." -ForegroundColor Yellow
        New-Item -ItemType Directory -Path "docs\assets" -Force
    }
    
    # Déplacer les assets vers le bon dossier s'ils sont à la racine
    if (Test-Path "docs\favicon.jpg") { Move-Item "docs\favicon.jpg" "docs\assets\favicon.jpg" -Force }
    if (Test-Path "docs\*.png") { Move-Item "docs\*.png" "docs\assets\" -Force }
    
    Write-Host "✅ Copie et organisation terminées!" -ForegroundColor Green
    
    # Git add et commit
    Write-Host "📤 Préparation pour Git..." -ForegroundColor Yellow
    git add docs/
    git add src/
    git commit -m "🚀 Deploy: Update production build for GitHub Pages"
    
    Write-Host "🎉 Prêt pour le push! Exécutez: git push origin main" -ForegroundColor Green
    
} else {
    Write-Host "❌ Erreur lors du build!" -ForegroundColor Red
}
