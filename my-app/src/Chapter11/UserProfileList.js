import React from 'react';
import UserProfile from './UserProfile';

class UserProfileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { id: 1, name: 'Hadam', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineer' },
                { id: 2, name: 'Leo', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Actor' },
                { id: 3, name: 'Jeff', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'CEO, Amazon' },
                { id: 4, name: 'Jimin', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineer' },
                { id: 5, name: 'Tim', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Actor' },
                { id: 6, name: 'Robert', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Actress' }
            ]
        }
    }

    render() {
        const { users } = this.state;

        return (
            <div>
                {users.map((user) => {
                    return (
                        <UserProfile
                            user={user} />
                    )
                })}
            </div>
        )
    }
}

export default UserProfileList;