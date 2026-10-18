require("dotenv").config();
var express = require("express");
var app = express();

// AVISAR O EXPRESS ONDE ESTÁ A PASTA VIEWS DENTRO DE "app"
app.set("views", "./app/views");


// Configuração do EJS como template engine
app.set("view engine", "ejs");

// Habilita o mecanismo de análise de requisição para payload no formato JSON
app.use(express.json());

// Habilita o mecanismo de análise de requisição proveniente de form HTML
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Requisição de arquivos de rotas (ajuste o caminho se necessário para "./routes/router")
const rotas = require("./app/routes/router");

// Utilizar as rotas obtidas na raiz do site
app.use("/", rotas);

// Definindo a porta através do dotenv ou padrão 3000
const porta = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor on-line\nhttp://localhost:${porta}`);
});
