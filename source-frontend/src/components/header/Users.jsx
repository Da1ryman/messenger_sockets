import { Button, Image } from "react-bootstrap";
import "./Users.css";

const Users = () => {
    return (
        <Button className="user-button">
            <span className="user-name">NickNAme</span>
            <Image
                src="https://avatars.mds.yandex.net/i?id=6304d7ef5f7030c465ee4a7bc188a5cb594b6d878399f541-10257242-images-thumbs&n=13"
                className="user-avatar"
            />
        </Button>
    );
};

export default Users;