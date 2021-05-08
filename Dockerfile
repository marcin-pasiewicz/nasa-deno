FROM hayd/alpine-deno:1.9.2

WORKDIR /app

COPY . .

USER deno

CMD ["run", "--allow-net", "--allow-read", "mod.ts"]

EXPOSE 3000