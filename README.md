# Начальная архитектура проекта
## Модульная архитектура:

``` src/
│
├── app/                  # Next.js App Router
│   ├── login/page.tsx
│   └── register/page.tsx
│
├── pages/                # страницы (логика страниц)
│   ├── login
│   │   └── LoginPage.tsx
│   └── register
│       └── RegisterPage.tsx
│
├── modules/              # бизнес-логика по модулям
│   └── auth
│       ├── api.ts
│       ├── types.ts
│       ├── useLogin.ts
│       └── useRegister.ts
│
├── components/           # крупные компоненты (формы)
│   └── auth
│       ├── LoginForm.tsx
│       └── RegisterForm.tsx
│
├── ui/                   # базовые UI компоненты
│   ├── Input
│   │   ├── Input.tsx
│   │   └── Input.module.css
│   │
│   └── Button
│       ├── Button.tsx
│       └── Button.module.css
│
├── lib/                  # утилиты
│   └── axios.ts
│
└── config/
    └── env.ts
```