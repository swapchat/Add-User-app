import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.uName} ({user.uAge} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
