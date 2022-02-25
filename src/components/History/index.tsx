import {Wrapper} from './styled'

const History = () => {
  return (
    <Wrapper>
      <table>
        <tr>
          <th>Date</th>
          <th>Operation</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>24 feb 2022 12:36:12</td>
          <td>Start</td>
          <td>20 seconds</td>
        </tr>
        <tr>
          <td>24 feb 2022 12:36:12</td>
          <td>Stop</td>
          <td>15 seconds</td>
        </tr>
        <tr>
          <td>24 feb 2022 12:36:12</td>
          <td>Reset</td>
          <td> -- </td>
        </tr>
        <tr>
          <td>24 feb 2022 12:36:12</td>
          <td>Start</td>
          <td> -- </td>
        </tr>
        <tr>
          <td>24 feb 2022 12:36:12</td>
          <td>Finish</td>
          <td> 45 seconds </td>
        </tr>

      </table>
    </Wrapper>
  );
};
export default History