FROM node:16-buster as build
WORKDIR /app
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
ADD . ./
RUN pnpm install
RUN pnpm build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]