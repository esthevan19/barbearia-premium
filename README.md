# BARBER CLUB — Site de barbearia

Site inicial em Next.js, TypeScript e Tailwind CSS, com identidade visual escura, detalhes dourados, catálogo de serviços, equipe, galeria, contato e formulário de solicitação via WhatsApp.

## O que já funciona

- Página inicial responsiva.
- Navegação por seções.
- Cards de serviços com preços demonstrativos.
- Galeria e apresentação da equipe com imagens remotas.
- Formulário de solicitação que abre o WhatsApp com mensagem pré-preenchida.
- Validação básica no navegador.
- SEO inicial e metadados.
- Estrutura SQL inicial para Supabase.

## Importante antes de publicar

Este repositório é uma **base inicial funcional de front-end**, não um sistema completo de agendamento em produção. O formulário não grava reservas no banco, não verifica disponibilidade real, não impede conflitos e não há painel administrativo implementado. Não divulgue o formulário como uma reserva automática: ele apenas envia uma solicitação para a equipe confirmar.

Nomes, fotos, preços, avaliações, telefone, endereço e horários são demonstrativos. Atualize `src/lib/site.ts` e `src/lib/services.ts` e substitua as imagens pelas imagens autorizadas da sua barbearia.

## Requisitos

- Node.js LTS compatível com a versão do Next.js.
- npm.
- Conta no GitHub.
- Conta na Vercel para publicar.
- Para o backend futuro: conta no Supabase.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificar build

```bash
npm run build
```

Se houver erro, corrija antes de publicar.

## Configuração da marca

Edite `src/lib/site.ts`:
- nome e slogan;
- telefone exibido;
- `whatsappNumber` com DDI + DDD + número, somente dígitos;
- endereço e cidade;
- Instagram;
- horário de funcionamento.

Edite `src/lib/services.ts` para atualizar serviços, preços e equipe.

## GitHub

Crie um repositório vazio no GitHub. Na pasta do projeto:

```bash
git init
git add .
git commit -m "Primeira versão do site da barbearia"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Substitua o endereço pelo URL real do seu repositório. Se `git init` já tiver sido executado, não precisa repetir.

## Publicar na Vercel

1. Entre em https://vercel.com e conecte o GitHub.
2. Clique em **Add New → Project**.
3. Importe o repositório.
4. Confirme o framework Next.js.
5. Clique em **Deploy**.
6. Após o deploy, abra o endereço `.vercel.app` e teste no celular.

Novos commits na branch principal devem iniciar um novo deploy automaticamente.

## Supabase (para a próxima etapa)

1. Crie um projeto em https://supabase.com.
2. Abra o SQL Editor.
3. Revise e execute `supabase/schema.sql`.
4. Para a integração do app, copie a URL do projeto e a chave pública/anon para `.env.local`, usando `.env.example` como referência.
5. Configure as mesmas variáveis no painel da Vercel, em Settings → Environment Variables.

Não coloque chaves secretas de serviço no navegador nem no GitHub. O schema SQL é apenas uma base: antes de aceitar reservas reais, implemente endpoint server-side, autenticação e autorização administrativa, políticas RLS adequadas, proteção contra abuso e prevenção transacional de horários conflitantes.

## Próximas etapas recomendadas

- Implementar autenticação real e painel administrativo.
- Implementar criação de reserva no servidor e persistência no Supabase.
- Implementar verificação de disponibilidade e prevenção de conflitos.
- Criar testes automatizados.
- Substituir conteúdo demonstrativo por conteúdo real.
- Configurar domínio próprio, se desejado.
