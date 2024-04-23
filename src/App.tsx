import { FC } from 'react';
import { DivApp, DivRoot } from './App.styles';
import { GlobalStyles } from './styles/global.styles';
import { Calendar } from './main/Calendar';

const App: FC = () => {
  return (
    <DivApp>
      <GlobalStyles />
      <DivRoot>
        <Calendar />
      </DivRoot>
    </DivApp>
  );
};

export default App;
