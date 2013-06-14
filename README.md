# Stalker Client

#### Identify a logged in user

```javascript
stalker.identify(user.id)
```

#### Identify anonymous user

```javascript
stalker.identify()
```

#### Identify with arbitrary user data

```javascript
stalker.identify(user.id, {
  email: 'jjbohn@gmail.com',
  first_name: 'John',
  last_name: 'Bohn'
})
```

#### Tag a user with intereseted keywords (meta tagging interests)

```javascript
stalker.tag(['London', 'England', 'Family'])
stalker.tag(['Restaraunt', 'Bar', 'Paris', 'France'])
stalker.tag(['Hotel', 'Family', 'Miami', 'Florida', 'United States'])
stalker.tag(['Africa', 'Safari', 'Tour'])
```
