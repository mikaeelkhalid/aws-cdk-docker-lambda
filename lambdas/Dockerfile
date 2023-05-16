FROM public.ecr.aws/lambda/nodejs:14

WORKDIR /var/task

COPY . .

RUN npm install

CMD [ "index.handler" ]
