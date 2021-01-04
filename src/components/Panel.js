import React from 'react'
import PropTypes from 'prop-types'

import { PanelContainer, PanelHeader, PanelBody } from './Panel.styles'

export const Panel = ({title, children}) => {
    return (
            <PanelContainer>
                <PanelHeader>
                    {title}
                </PanelHeader>
                <PanelBody>
                    {children}
                </PanelBody>
            </PanelContainer>
    )
  }

  Panel.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  }