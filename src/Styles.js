import styled from 'styled-components'

const Styles = styled.div`
  padding: 1rem;

  table {
    margin-left:auto;
    margin-right:auto;    
    border-spacing: 0;
    border: 3px solid rgba(224, 224, 224, 1);
    width: 80%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.75rem;
      border-bottom: 2px solid rgba(224, 224, 224, 1);
      border-right: 2px solid rgba(224, 224, 224, 1);

      :last-child {
        border-right: 0;
      }
    },
    
  }
`

export default Styles;