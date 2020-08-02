import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './style';
import LogoImg from '../../assets/Logo.svg';

interface RepositoryParams {
    repository: string;
}

// React.FC = React Functional component
const Repository: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>();

    return (<>
        <Header>
            <img src={LogoImg} alt="Github Explorer" />
            <Link to="/dashboard">
                <FiChevronLeft size={16} />
            Voltar
            </Link>
        </Header>
        <RepositoryInfo>
            <header>
                <img src="https://avatars1.githubusercontent.com/u/55980259?s=460&u=14290cea59e995dc4544857f4f6e698c9bcc4ec5&v=4" alt="rocketseat" />
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>descrição do repo</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>1080</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>48</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>67</strong>
                    <span>Issues abertas</span>
                </li>
            </ul>
        </RepositoryInfo>

        <Issues>
            <Link
                to={`/repositories/`
                }>
                <div>
                    <strong>as</strong>
                    <p>assa</p>
                </div>
                <FiChevronRight size={20} />
            </Link>
        </Issues>
    </>
    );
}

export default Repository;