printf "[*] Verifying /account/register"
printf "\nShould get {} :"
curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstlr", "pw": "djawnstlr", "sid": "2016323232", "name": "엄준식", "belong": "엄준식대학/엄준식학부", "email":"test@test.kr"}' localhost:31413/account/register

printf "\n\nShould get 400 error: "
curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstlr", "email":"test@test.com"}' localhost:31413/account/register

printf "\n\nShould get id conflict: "
curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstlr", "pw": "djawnstlr", "email":"test@test.com"}' localhost:31413/account/register

printf "\n\nShould get email conflict: "
curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstl", "pw": "djawnstlr", "email":"test@test.kr"}' localhost:31413/account/register

printf "\n\nShould get {}: "
curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstl", "pw": "djawnstlr", "email":"test@test.com"}' localhost:31413/account/register

printf "\n[*] Verifying /account/login"
printf "\nShould get token :"
curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstlr", "pw": "djawnstlr"}' localhost:31413/account/login

printf "\n\nShould get 400 error: "
curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstlr"}' localhost:31413/account/login

printf "\n\nShould get 401 {}: "
curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnslr", "pw": "djawnstl"}' localhost:31413/account/login

printf "\nIssuing token...\n"
token=$(curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstlr", "pw": "djawnstlr"}' localhost:31413/account/login | jq -r '.token')

printf "\n[*] Verifying /account/logout"
printf "\n\nShould get {}: "
curl -X POST -H "Content-Type: application/json" -d '{"token": "'$token'"}' localhost:31413/account/logout

printf "\n\nShould get {token: null}: "
curl -X POST -H "Content-Type: application/json" -d '{}' localhost:31413/account/logout

printf "\n\nShould get {token: null}: "
curl -X POST -H "Content-Type: application/json" -d '{"token": "'$token'"}' localhost:31413/account/logout

printf "\n[*] Verifying /account/unregister"
printf "\nIssuing token...\n"
token=$(curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstlr", "pw": "djawnstlr"}' localhost:31413/account/login | jq -r '.token')

printf "\n\nShould get {token: null}: "
curl -X POST -H "Content-Type: application/json" -d '{}' localhost:31413/account/unregister

printf "\n\nShould get {}: "
curl -X POST -H "Content-Type: application/json" -d '{"token": "'$token'"}' localhost:31413/account/unregister

printf "\nShould get {} :"
curl -X POST -H "Content-Type: application/json" -d '{"id": "djawnstlr", "pw": "djawnstlr"}' localhost:31413/account/login