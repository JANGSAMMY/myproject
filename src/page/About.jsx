import { AbpoutConStyle } from '../components/about/about';
import AboutVisual from '../components/about/AboutVisual';
import { Container } from './style';
const About = () => {
    return (
        <Container>
            <AboutVisual />
            <div className="inner">
                <AbpoutConStyle>
                    <h2>CEO 인사말</h2>
                    <div className="txt">
                        <img src="./images/about2.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sunt,
                            nesciunt praesentium suscipit repellendus ex voluptas saepe ipsam
                            mollitia deleniti similique sint voluptatum, distinctio eligendi culpa
                            voluptatibus pariatur. Minima, odit.
                            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Doloremque sit sequi cupiditate consectetur? Soluta mollitia, autem iste
                            placeat facilis non nostrum aspernatur possimus harum sapiente
                            perferendis voluptas quis iure! Voluptatibus! Lorem, ipsum dolor sit
                            amet consectetur adipisicing elit. Incidunt est maiores repellendus nisi
                            accusamus distinctio, quia temporibus aperiam dignissimos eligendi illum
                            velit consequuntur vero soluta repudiandae sapiente molestias rem id?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, nam
                            voluptatibus aperiam cumque id facere fugiat. Delectus, temporibus,
                            deleniti vitae nemo, veniam dolores tenetur ratione earum fugit fugiat
                            placeat quis?
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                            similique iure soluta doloribus, earum at? Illum, voluptatum vel
                            distinctio rerum laudantium excepturi quidem dicta aliquam esse earum
                            cupiditate! Similique, commodi!
                            <hr />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sunt,
                            nesciunt praesentium suscipit repellendus ex voluptas saepe ipsam
                            mollitia deleniti similique sint voluptatum, distinctio eligendi culpa
                            voluptatibus pariatur. Minima, odit.
                            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Doloremque sit sequi cupiditate consectetur? Soluta mollitia, autem iste
                            placeat facilis non nostrum aspernatur possimus harum sapiente
                            perferendis voluptas quis iure! Voluptatibus! Lorem, ipsum dolor sit
                            amet consectetur adipisicing elit. Incidunt est maiores repellendus nisi
                            accusamus distinctio, quia temporibus aperiam dignissimos eligendi illum
                            velit consequuntur vero soluta repudiandae sapiente molestias rem id?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, nam
                            voluptatibus aperiam cumque id facere fugiat. Delectus, temporibus,
                            deleniti vitae nemo, veniam dolores tenetur ratione earum fugit fugiat
                            placeat quis?
                        </p>
                    </div>
                </AbpoutConStyle>
            </div>
        </Container>
    );
};

export default About;
