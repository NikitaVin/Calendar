import { FC } from 'react';
import { DivApp, DivRoot } from './App.styles';
import { GlobalStyles } from './styles/global.styles';
import { CalendarMain } from './main/Calendar';

const App: FC = () => {
  return (
    <DivApp>
      <GlobalStyles />
      <DivRoot>
        <CalendarMain />
      </DivRoot>
    </DivApp>
  );
};

export default App;
