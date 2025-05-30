Feature: Login no sistema Buggy Cars
    Cenário: Login com sucesso
        Given o usuário acessa a página de Login
        When o usuário preenche o campo Usuário "UserTestBuggyMatheus"
        And o usuário preenche o campo Senha "Ms123456$"
        Then ele deve ver uma mudança de comportamento na página aparecendo seu nome "Matheus"