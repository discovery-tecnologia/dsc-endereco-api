define({ "api": [
  {
    "type": "POST",
    "url": "/login",
    "title": "Autenticação",
    "group": "Login",
    "description": "<p>Efetua o login para obter o token de acesso a API. Este token deve ser enviado no header de cada requisição HTTP que precise de autenticação(ver doc).</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha de acesso do usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\":    \"andreluizhaag@gmail.com\",\n  \"password\": \"1a2b3c\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token JWT(Jason Web Token) que serve para identificar o usuário nas próximas requisições. Deve ser incluido no header &quot;x-access-token&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "expires",
            "description": "<p>Time stamp em que a autenticação irá expirar.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 OK\n{\n  token : \"$2a$05$ooqAbytsQU2lAgBG.Ob8x.4T5F/AO/8s6fSYZXdvIXNDtnNt5h1uq\",\n  expires: \"13965\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-400:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Parâmetro faltando ou inválido\"\n}",
          "type": "json"
        },
        {
          "title": "Error-401 :",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/login.js",
    "groupTitle": "Login",
    "name": "PostLogin"
  },
  {
    "type": "POST",
    "url": "/login/change-password",
    "title": "Alterar senha perdida",
    "group": "Login",
    "description": "<p>Cria uma nova senha</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost/login/change-password -d '<json_param>'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token enviado para o e-mail de recuperação.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail utilizado para autenticação no sistema.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPasswrd",
            "description": "<p>Nova senha que irá subistituir a antiga.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"toke\":        \"$2a$05$ooqAbytsQU2lAgBG.Ob8x.4T5F/AO/8s6fSYZXdvIXNDtnNt5h1uq\"\n  \"email\":       \"andreluizhaag@gmail.com\",\n  \"newPassword\": \"1a2b3c\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/login.js",
    "groupTitle": "Login",
    "name": "PostLoginChangePassword"
  },
  {
    "type": "POST",
    "url": "/login/recovery",
    "title": "Recuperar senha",
    "group": "Login",
    "description": "<p>Receber um e-mail da API para recuperação da senha de acesso. Este é o primeiro passo para a recuperação. O e-mail irá conter um link para a URL de retorno informada acrescido do parâmetro token que deve ser enviado na criação da nova senha para o recurso &quot;change-password&quot;. O toke expira em 60 minutos.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost/login/recovery -d '<json_param>'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail utilizado para autenticação no sistema.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\":     \"andreluizhaag@gmail.com\",\n  \"returnUrl\": \"http://front-end.com.br/recovery\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/login.js",
    "groupTitle": "Login",
    "name": "PostLoginRecovery"
  },
  {
    "type": "POST",
    "url": "/logout",
    "title": "Desautorização",
    "group": "Logout",
    "description": "<p>Desautoriza o token de acesso. Este token deve ser enviado no header de cada requisição HTTP que precise de autenticação.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://<api_domain>:<port>/login -d '<json_param>'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha de acesso do usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\":    \"andreluizhaag@gmail.com\",\n  \"password\": \"1a2b3c\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token JWT(Jason Web Token) que serve para identificar o usuário nas próximas requisições. Deve ser incluido no header &quot;x-access-token&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "expires",
            "description": "<p>Time stamp em que a autenticação irá expirar.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 OK\n{\n  token : \"$2a$05$ooqAbytsQU2lAgBG.Ob8x.4T5F/AO/8s6fSYZXdvIXNDtnNt5h1uq\",\n  expires: \"13965\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-400:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Parâmetro faltando ou inválido\"\n}",
          "type": "json"
        },
        {
          "title": "Error-401 :",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Não autorizado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/logout.js",
    "groupTitle": "Logout",
    "name": "PostLogout"
  },
  {
    "type": "GET",
    "url": "/",
    "title": "Teste de conectividade",
    "description": "<p>URL de teste para verificação de conectividade com a API.</p>",
    "group": "Teste",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\" : \"API acessada com sucesso.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/cep.js",
    "groupTitle": "Teste",
    "name": "Get"
  },
  {
    "type": "GET",
    "url": "/",
    "title": "Teste de conectividade",
    "description": "<p>URL de teste para verificação de conectividade com a API.</p>",
    "group": "Teste",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\" : \"API acessada com sucesso.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Teste",
    "name": "Get"
  },
  {
    "type": "DELETE",
    "url": "/user",
    "title": "Deletar",
    "group": "Users",
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "DeleteUser"
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "Listar",
    "group": "Users",
    "description": "<p>Obter a lista de usuários.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de acesso obtido no login.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5691565823220b7a4790b211\",\n    \"active\": true,\n    \"name\": \"André Luiz Haag\",\n    \"email\": \"andreluizhaag@gmail.com\",\n  },\n  {\n    \"_id\": \"5691565823220b7a4790b211\",\n    \"active\": true,\n    \"name\": \"Another User\",\n    \"email\": \"example@mail.com\",\n  },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "GetUser"
  },
  {
    "type": "POST",
    "url": "/user",
    "title": "Incluir",
    "group": "Users",
    "description": "<p>Incluir novo usuário.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de acesso obtido no login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail que será utilizado para autenticação no sistema.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha que será utilizada para autenticação.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "descrition",
            "description": "<p>Descição ou observações opcionais sobre o usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\":        \"alhaag\",\n  \"email\":       \"andreluizhaag@gmail.com\",\n  \"password\":    \"1a2a3a\",\n  \"description\": \"Descição ou observações sobre o usuário\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostUser"
  },
  {
    "type": "PUT",
    "url": "/user",
    "title": "Atualizar",
    "group": "Users",
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PutUser"
  }
] });
