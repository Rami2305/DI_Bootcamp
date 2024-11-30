import requests 

# response = requests.get('https://api.chucknorris.io/jokes/random')
# data = response.json()

# print(response.status_code)
# print(data['value'])


response = requests.get("https://api.chucknorris.io/jokes/categories")
category = response.json()[0]
print(category)


response = requests.get(f'https://api.chucknorris.io/jokes/random?category={category}')
print(response.json()['value'])