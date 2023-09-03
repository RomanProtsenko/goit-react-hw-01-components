import { Profile } from './Profile/Profile.jsx';
import user from './Profile/user.json'
import { Statistics } from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import transactions from './TransactionHistory/transactions.json'


export const App = () => {
  return (
    <>
      <Profile user={user} /> 
      <Statistics title="Upload stats"
        stats={data} />  
      <FriendList
        friends={friends}
      />  
      <TransactionHistory transactions={transactions}/>
    </>
   
  );
};