import requests
from fastapi import FastAPI


app = FastAPI()

@app.get('/')
def get_list():
  return[1,2,3]


@app.get('/contact')
def get_list():
  return {name: "Platzi"}



def get_categories():
  r=requests.get('https://api.escuelajs.co/api/v1/categories')
  print(r.status_code)
  print(r.text)
  print(type(r.text))
  categories = r.json()
  print(type(categories))
  for category in categories:
    print(category['name'])