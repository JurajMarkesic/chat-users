FROM python:3.9-slim-bullseye

COPY . /usr/src/app
RUN pip3 install -r /usr/src/app/config/requirements.txt

WORKDIR /usr/src/app/api