import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import LogoImg from '../../assets/Logo.svg';

import { Title, Form, Repositories } from './style';

// React.FC = React Functional component
const Dashboard: React.FC = () => {
    return (<>
        <img src={LogoImg} alt="Github Explorer logo" />
        <Title>Explore Repositórios do GitHub</Title>

        <Form>
            <input placeholder="Digite o nome do repositório" />
            <button type="submit" >Pesquisar</button>
        </Form>

        <Repositories>
            <a href="teste">
                <img
                    src="https://avatars1.githubusercontent.com/u/55980259?s=460&u=14290cea59e995dc4544857f4f6e698c9bcc4ec5&v=4"
                    alt="Gustavo Voigt"
                />
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Easy peasy highly scalable REactJS & React Native Forms! </p>
                </div>
                <FiChevronRight size={20}/>
            </a>
            <a href="teste">
                <img
                    src="https://avatars1.githubusercontent.com/u/55980259?s=460&u=14290cea59e995dc4544857f4f6e698c9bcc4ec5&v=4"
                    alt="Gustavo Voigt"
                />
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Easy peasy highly scalable REactJS & React Native Forms! </p>
                </div>
                <FiChevronRight size={20}/>
            </a>
            <a href="teste">
                <img
                    src="https://avatars1.githubusercontent.com/u/55980259?s=460&u=14290cea59e995dc4544857f4f6e698c9bcc4ec5&v=4"
                    alt="Gustavo Voigt"
                />
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Easy peasy highly scalable REactJS & React Native Forms! </p>
                </div>
                <FiChevronRight size={20}/>
            </a>
            <a href="teste">
                <img
                    src="https://avatars1.githubusercontent.com/u/55980259?s=460&u=14290cea59e995dc4544857f4f6e698c9bcc4ec5&v=4"
                    alt="Gustavo Voigt"
                />
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Easy peasy highly scalable REactJS & React Native Forms! </p>
                </div>
                <FiChevronRight size={20}/>
            </a>
        </Repositories>
    </>)
}

export default Dashboard;