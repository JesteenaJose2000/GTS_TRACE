import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import GearIcon from 'mdi-react/GearIcon';
export default function Farmpopup() {
  const [firstOpen, setFirstOpen] = React.useState(false)
  const [secondOpen, setSecondOpen] = React.useState(false)

  return (
    <>
     
      <GearIcon onClick={() => setFirstOpen(true)} style={{"cursor":"pointer", "color": "black"}}/>
      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header>Modal #1</Modal.Header>
        <Modal.Content image>
          <div className='image'>
            <Icon name='right arrow' />
          </div>
          <Modal.Description>
            <p>We have more to share with you. Follow us along to modal 2</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setSecondOpen(true)} primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size='small'
        >
          <Modal.Header>Modal #2</Modal.Header>
          <Modal.Content>
            <p>That's everything!</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon='check'
              content='All Done'
              onClick={() => setSecondOpen(false)}
            />
          </Modal.Actions>
        </Modal>
      </Modal>
    </>
  )
}

export default ModalExampleMultiple

import React from 'react'
import { Button, Checkbox, Grid, Modal } from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CONFIG_CLOSE_ON_DIMMER_CLICK':
      return { ...state, closeOnDimmerClick: action.value }
    case 'CONFIG_CLOSE_ON_ESCAPE':
      return { ...state, closeOnEscape: action.value }
    case 'OPEN_MODAL':
      return { ...state, open: true }
    case 'CLOSE_MODAL':
      return { ...state, open: false }
    default:
      throw new Error()
  }
}

function ModalExampleCloseConfig() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    closeOnEscape: true,
    closeOnDimmerClick: true,
    open: false,
    dimmer: undefined,
  })
  const { open, closeOnEscape, closeOnDimmerClick } = state

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={closeOnEscape}
          label={{ children: <code>closeOnEscape</code> }}
          onChange={(e, { checked }) =>
            dispatch({ type: 'CONFIG_CLOSE_ON_ESCAPE', value: checked })
          }
        />
        <br />
        <Checkbox
          checked={closeOnDimmerClick}
          label={{ children: <code>closeOnDimmerClick</code> }}
          onChange={(e, { checked }) =>
            dispatch({ type: 'CONFIG_CLOSE_ON_DIMMER_CLICK', value: checked })
          }
        />
      </Grid.Column>

      <Grid.Column>
        <Modal
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          open={open}
          onOpen={() => dispatch({ type: 'OPEN_MODAL' })}
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
          trigger={<Button>Show Modal</Button>}
        >
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })} negative>
              No
            </Button>
            <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })} positive>
              Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  )
}

export default ModalExampleCloseConfig