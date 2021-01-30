FROM alpine:3.13.1
RUN apk update
RUN apk add nodejs yarn mpc
RUN mkdir /code
COPY . /code
ENV MPCSERVER 192.168.2.122 
ENTRYPOINT ["yarn",  "--cwd", "/code", "start"]
EXPOSE 3000/tcp
