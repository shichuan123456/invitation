FROM fe:ui AS builder

COPY . /app

WORKDIR /app

RUN yarn && npm run build

FROM fe:serve

COPY ./serve /app

WORKDIR /app

RUN yarn

COPY --from=builder /app/dit /app/dist

EXPOSE 9000