import { userInfo } from 'os';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './index.scss';

export const Profile = () => {
	const user = useSelector((state) => state);
	const history = useHistory();
	const [userInfos, updateUserInfo] = useState();
	useEffect(() => {
		if (!user.isLogged ) {
			history.push('/');   
		} else{
            fetch(`http://localhost:3000/api/users/${user.id}`)
            .then(response => response.json())
            .then(json => updateUserInfo(json))
			.then(console.log(userInfos));
        }
	}, [!userInfos])

	return(
		<section className="profile">
			{
			userInfos &&
				<div className="">
					<div className="name">
					{userInfos.firstname} {userInfos.lastname} {
						userInfos.is_validated ||
						<img src="http://cdn.onlinewebfonts.com/svg/img_525475.png" alt=""/>
					}
					</div>
					<div>
						{userInfos.role}
					</div>
					{
						userInfos.promotions == true
						&&
						<div>
							<h2>vos promotions : </h2>
							<ul>
								{
									userInfos.promotions.map(promo => (
										<li>{promo}</li>
									))
								}
							</ul>
						</div>
						||
						<div>
							<h2>Nous ne trouvons pas vos promotions</h2>
							<p>(nn j'dec, j'ai pas reussi a implementer ca en back-end MAIS tu peux voir que ca y est en front-end)</p>
						</div>
					}
				</div>
            }

		</section>
	)
}
