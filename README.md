# Sistema de Processamento de Pedidos - SportBar

Este é um projeto acadêmico desenvolvido para o restaurante SportBar. O objetivo do sistema é melhorar e agilizar o processo de pedidos, proporcionando uma experiência mais eficiente tanto para os funcionários quanto para os clientes.

## Descrição
O Sistema de Processamento de Pedidos para o SportBar é uma solução criada para otimizar a gestão de pedidos no restaurante. A aplicação permite aos funcionários gerenciar os pedidos de maneira mais rápida e eficaz, reduzindo erros e aumentando a satisfação dos clientes.

## Modo de Uso

O sistema de processamento de pedidos do SportBar funciona da seguinte maneira:

1. **QR Code nas Mesas:** Cada mesa do estabelecimento possui um QR code exclusivo que redireciona para o sistema de pedidos. Por exemplo, a URL para a Mesa 1 seria `https://sportbar.azaphian.com/mesa/1`, onde o número ao final da URL representa o ID da mesa.

2. **Acesso ao Sistema:** Quando o cliente escaneia o QR code, ele é direcionado para o site do SportBar, onde pode visualizar o cardápio, fazer pedidos e acompanhar o status de seus pedidos em tempo real.

3. **Versão Beta:** Esta versão do site (Beta 1.0.1) está aberta ao público e utiliza este repositório apenas para demonstração. Ela foi projetada para mostrar as funcionalidades básicas do sistema de pedidos.

4. **Demonstração e Restrições:** Conforme combinado com os professores e o estabelecimento, o backend e o sistema administrativo estão privados devido a questões de segurança e estão sendo utilizados pelo estabelecimento no momento. As novas atualizações são realizadas em um repositório privado, que não podemos deixar aberto.


## Funcionalidades
- Inserção de Pedidos: Permite a inserção rápida e eficiente de novos pedidos.
- Visualização de Cardápio: Os funcionários podem visualizar o cardápio completo, facilitando a seleção dos itens.
- Gerenciamento de Pedidos: Permite o acompanhamento do status dos pedidos em tempo real.
- Edição de Pedidos: Funcionalidade para editar pedidos antes de enviá-los à cozinha.
- Resumo de Pedidos: Tela de resumo que facilita a conferência e envio dos pedidos.

## Tecnologias Utilizadas
- Front-end: Desenvolvido com Angular e Ionic para uma interface intuitiva e responsiva.
- Back-end: Utiliza Django para a criação de APIs RESTful que suportam as funcionalidades do sistema.
- Banco de Dados: Gerencia os dados dos pedidos e do cardápio de forma eficiente.(POSTGRES)
- Integrações: Possui integração com sistemas de pagamento para facilitar o processo de checkout.


**Por questões de segurança, o backend e o sistema administrativo estão privados, pois estão sendo utilizados pelo estabelecimento no momento. Esta versão é apresentada apenas para demonstração na faculdade e está aberta ao público e aos alunos, conforme combinado com os professores e o estabelecimento. As novas atualizações estão sendo feitas em um repositório privado, que não podemos deixar aberto.**
