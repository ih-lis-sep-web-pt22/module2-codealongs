# MongoDB Queries

## simple search:

pass the name of the property and the value we are searching
{title: 'The Godfather'}

## search by id:

{\_id: ObjectId('636691e758473dc519017cb0')}

## combined search:

{year: '2000', rate: '8.5'}
{$and: [{year: '2000'}, {rate: '8.5'}]}

## or operator

{$or: [{year: '2000'}, {rate: '8.5'}]}

## greater than

{ rate: { $gt: '9.0' } }

## greater than and equal

{ rate: { $gte: '9.2' } }

## less than

{rate: {$lt: '8.0'}}

## less than and equal

{rate: {$lte: '8.0'}}

## not equal

{rate: {$ne: '9.2'}}

## exists

{genre: {$exists: false}}

## type

{genre: {$type: "bool"}}

### Project

{title: 1, director: 1, \_id: 0}

{title: 0}

### Sort

{title: 1}
{title: -1}

### Skip and limit

Skip: 5
Limit: 10
