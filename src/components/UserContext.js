import React from 'react';

//create context
const UserContext=React.createContext('Superman');

//create provider
const UserProvider= UserContext.Provider;

//create consumer
const UserConsumer=UserContext.Consumer;

export {UserProvider,UserConsumer};