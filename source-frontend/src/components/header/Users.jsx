import { Button, Image} from "react-bootstrap";

const Users = () => {

    return (
        <>
            <Button className="btn-light w-100">
                NickNAme
                <Image src="https://avatars.mds.yandex.net/i?id=6304d7ef5f7030c465ee4a7bc188a5cb594b6d878399f541-10257242-images-thumbs&n=13" roundedCircle style={{width:"50px", height:"50px", marginLeft: '8em'}}/>
            </Button>
        </>
    )
}

export default Users;