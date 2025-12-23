#!/bin/bash

echo "🚀 Démarrage de Surdicécoute"
echo ""
echo "================================"
echo "1️⃣  Backend (port 3000)"
echo "================================"
cd backend
PORT=3000 node dist/main.js &
BACKEND_PID=$!
cd ..

echo ""
echo "Attente du démarrage du backend..."
sleep 3

echo ""
echo "================================"
echo "2️⃣  Frontend (port 4200)"
echo "================================"
ng serve &
FRONTEND_PID=$!

echo ""
echo "✅ Application démarrée !"
echo ""
echo "📍 Backend  : http://localhost:3000"
echo "📍 Frontend : http://localhost:4200"
echo ""
echo "👉 Comptes de test :"
echo "   marie.dupont@lepharedouest.fr / password123"
echo ""
echo "Pour arrêter : Ctrl+C"
echo ""

# Attendre que l'utilisateur arrête
wait $BACKEND_PID $FRONTEND_PID
