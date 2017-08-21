import styled from 'styled-components';

const TopBar = styled.div`
  border: 0;
  background-color: black;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    margin:0;
    padding: 0 30px;
    color: white;
    text-decoration: none;
  }
  a:hover, a:active {
    text-decoration: underline;
  }
  .left{
  width:33%;
  text-align:left
  }
  .middle{
    width:34%;
    text-align: center
  }
  .right{
    width:33%;
    text-align:right
  }
`;

export default TopBar;