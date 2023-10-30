

# Setup 

Use node version 16 or 18

```
npm ci
npm start
```

# Typscript conversion

1. Add a tsconfig.json

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": false,
    "baseUrl": "./src",

   
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
  },
  "include": [
    "src",
]
}
```

2. Install dev dependency to typescript, ````npm i -D typescript``

2. Add type-check command, "type-check": "tsc"

2. Change vite.config.js to vite.config.ts

3. Change .js files to .ts and .jsx to .tsx

4. Start with conversion of fakeservice.ts 