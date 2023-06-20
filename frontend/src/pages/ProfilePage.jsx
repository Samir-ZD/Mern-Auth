import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';


const ProfilePage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth);

    const [updateProfile, { isLoading }] = useUpdateUserMutation();



    useEffect(() => {
        setName(userInfo.name)
        setEmail(userInfo.email)
    }, [userInfo.setName, userInfo.setEmail]);


    const submitHanlder = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.log('Passwords do not match');
        } else {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    name,
                    email,
                    password,
                }).unwrap();
                console.log(res);
                dispatch(setCredentials(res));
                console.log('Profile updated successfully');
            } catch (err) {
                console.log(err?.data?.message || err.error);
            }
        }
    };
    return (
        <FormContainer>
            <h1>Update Profile</h1>
            <Form onSubmit={submitHanlder}>
                <Form.Group className="my-2" controlId="name">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"
                        value={name} onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"
                        value={email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>
                    Update
                </Button>
            </Form>

        </FormContainer>
    )
}

export default ProfilePage