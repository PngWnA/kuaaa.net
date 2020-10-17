printf "Should be 1 : "
curl -X POST -H "Content-Type: application/json" -d '{"id":"djawnstlr", "pw":"djawnstlr", "email":"test@test.kr"}' localhost:31413/account/register

printf "\n\nShould get pw:null : "
curl -X POST -H "Content-Type: application/json" -d '{"id":"djawnstlr"}' localhost:31413/account/login

printf "\n\nShould get {token: {token}} : "
curl -X POST -H "Content-Type: application/json" -d '{"id":"djawnstlr", "pw":"djawnstlr"}' localhost:31413/account/login

printf "\n\nShould get {} : "
curl -X POST -H "Content-Type: application/json" -d '{"id":"djawnstlr", "pw":"abcde"}' localhost:31413/account/login
