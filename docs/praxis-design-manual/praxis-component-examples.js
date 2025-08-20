// ============================================
// VUE COMPONENTS (For Nuxt UI Pro)
// ============================================

// SecurityCard.vue
`<template>
  <div class="card" :class="cardClasses">
    <div v-if="title" class="card-header">
      <h3 class="h5">{{ title }}</h3>
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div v-if="hasFooter" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  title: String,
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'accent', 'danger'].includes(value)
  },
  hoverable: {
    type: Boolean,
    default: false
  }
})

const slots = useSlots()
const hasFooter = computed(() => !!slots.footer)

const cardClasses = computed(() => {
  const classes = []
  
  if (props.hoverable) {
    classes.push('card-hoverable')
  }
  
  if (props.variant !== 'default') {
    classes.push(\`card-\${props.variant}\`)
  }
  
  return classes.join(' ')
})
</script>`

// SecurityButton.vue
`<template>
  <component
    :is="componentType"
    :href="href"
    :to="to"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <span v-if="loading" class="icon-sm animate-spin mr-2">
      <!-- Loading spinner icon -->
      <svg class="animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { NuxtLink } from '#components'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'accent', 'outline', 'outline-accent', 'danger', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  href: String,
  to: [String, Object],
  disabled: Boolean,
  loading: Boolean
})

const emit = defineEmits(['click'])

const componentType = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})

const buttonClasses = computed(() => {
  const classes = [\`btn-\${props.variant}\`]
  
  if (props.size !== 'md') {
    classes.push(\`btn-\${props.size}\`)
  }
  
  if (props.loading) {
    classes.push('cursor-wait')
  }
  
  return classes.join(' ')
})

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>`

// SecurityAlert.vue
`<template>
  <transition name="fade">
    <div v-if="modelValue" :class="alertClasses">
      <div v-if="title" class="alert-title">{{ title }}</div>
      <div class="alert-content">
        <slot />
      </div>
      <button
        v-if="dismissible"
        @click="dismiss"
        class="alert-close"
        aria-label="Dismiss alert"
      >
        <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'warning', 'danger'].includes(value)
  },
  title: String,
  dismissible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const alertClasses = computed(() => {
  const classes = [`alert-${props.type}`]
  if (props.dismissible) {
    classes.push('alert-dismissible')
  }
  return classes.join(' ')
})

const dismiss = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>`

// ============================================
// REACT COMPONENTS (For Astro)
// ============================================

// SecurityCard.jsx
`import React from 'react'
import PropTypes from 'prop-types'

export const SecurityCard = ({ 
  title, 
  variant = 'default', 
  hoverable = false, 
  children, 
  footer 
}) => {
  const getCardClasses = () => {
    const classes = ['card']
    
    if (hoverable) {
      classes.push('card-hoverable')
    }
    
    if (variant !== 'default') {
      classes.push(\`card-\${variant}\`)
    }
    
    return classes.join(' ')
  }
  
  return (
    <div className={getCardClasses()}>
      {title && (
        <div className="card-header">
          <h3 className="h5">{title}</h3>
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  )
}

SecurityCard.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'accent', 'danger']),
  hoverable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node
}`

// SecurityButton.jsx
`import React from 'react'
import PropTypes from 'prop-types'

export const SecurityButton = ({
  variant = 'primary',
  size = 'md',
  type = 'button',
  href,
  disabled = false,
  loading = false,
  onClick,
  children,
  ...props
}) => {
  const getButtonClasses = () => {
    const classes = [\`btn-\${variant}\`]
    
    if (size !== 'md') {
      classes.push(\`btn-\${size}\`)
    }
    
    if (loading) {
      classes.push('cursor-wait')
    }
    
    return classes.join(' ')
  }
  
  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e)
    }
  }
  
  const LoadingSpinner = () => (
    <svg className="icon-sm animate-spin mr-2" fill="none" viewBox="0 0 24 24">
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
  
  if (href) {
    return (
      <a 
        href={href}
        className={getButtonClasses()}
        onClick={handleClick}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {children}
      </a>
    )
  }
  
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={getButtonClasses()}
      onClick={handleClick}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  )
}

SecurityButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'outline', 'outline-accent', 'danger', 'ghost']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  type: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}`

// SecurityAlert.jsx
`import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const SecurityAlert = ({
  type = 'info',
  title,
  dismissible = false,
  onDismiss,
  autoClose = 0,
  children
}) => {
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    if (autoClose > 0) {
      const timer = setTimeout(() => {
        handleDismiss()
      }, autoClose)
      
      return () => clearTimeout(timer)
    }
  }, [autoClose])
  
  const handleDismiss = () => {
    setIsVisible(false)
    if (onDismiss) {
      onDismiss()
    }
  }
  
  if (!isVisible) return null
  
  const getAlertClasses = () => {
    const classes = [\`alert-\${type}\`]
    if (dismissible) {
      classes.push('alert-dismissible')
    }
    return classes.join(' ')
  }
  
  return (
    <div className={getAlertClasses()}>
      {title && <div className="alert-title">{title}</div>}
      <div className="alert-content">
        {children}
      </div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="alert-close"
          aria-label="Dismiss alert"
        >
          <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </div>
  )
}

SecurityAlert.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  title: PropTypes.string,
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
  autoClose: PropTypes.number,
  children: PropTypes.node.isRequired
}`

// SecurityForm.jsx
`import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const SecurityInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helpText,
  size = 'md',
  disabled = false,
  ...props
}) => {
  const getInputClasses = () => {
    const classes = ['input']
    
    if (size !== 'md') {
      classes.push(\`input-\${size}\`)
    }
    
    if (error) {
      classes.push('input-error')
    }
    
    return classes.join(' ')
  }
  
  return (
    <div className="form-group">
      {label && (
        <label 
          htmlFor={name} 
          className={required ? 'label label-required' : 'label'}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={getInputClasses()}
        aria-invalid={!!error}
        aria-describedby={error ? \`\${name}-error\` : helpText ? \`\${name}-help\` : undefined}
        {...props}
      />
      {error && (
        <p id={\`\${name}-error\`} className="error-text">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={\`\${name}-help\`} className="help-text">
          {helpText}
        </p>
      )}
    </div>
  )
}

SecurityInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  helpText: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool
}`

// SecurityTable.jsx
`import React from 'react'
import PropTypes from 'prop-types'

export const SecurityTable = ({
  columns,
  data,
  striped = false,
  hover = false,
  bordered = false,
  onRowClick,
  emptyMessage = 'No data available'
}) => {
  const getTableClasses = () => {
    const classes = ['table']
    
    if (striped) classes.push('table-striped')
    if (hover) classes.push('table-hover')
    if (bordered) classes.push('table-bordered')
    
    return classes.join(' ')
  }
  
  const handleRowClick = (row, index) => {
    if (onRowClick) {
      onRowClick(row, index)
    }
  }
  
  return (
    <div className="overflow-x-auto">
      <table className={getTableClasses()}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column.key || index}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-8 text-praxis-gray">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr 
                key={row.id || rowIndex}
                onClick={() => handleRowClick(row, rowIndex)}
                className={onRowClick ? 'cursor-pointer' : ''}
              >
                {columns.map((column, colIndex) => (
                  <td key={\`\${rowIndex}-\${column.key || colIndex}\`}>
                    {column.render 
                      ? column.render(row[column.key], row, rowIndex)
                      : row[column.key]
                    }
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

SecurityTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string.isRequired,
    render: PropTypes.func
  })).isRequired,
  data: PropTypes.array.isRequired,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  bordered: PropTypes.bool,
  onRowClick: PropTypes.func,
  emptyMessage: PropTypes.string
}`

// ============================================
// USAGE EXAMPLES
// ============================================

// Vue Usage Example (in a page or component)
`<template>
  <div class="container-praxis section-padding">
    <h1 class="h1 mb-8">Security Dashboard</h1>
    
    <SecurityAlert 
      v-model="showAlert"
      type="success"
      title="Scan Complete"
      dismissible
    >
      All systems are secure and operating normally.
    </SecurityAlert>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SecurityCard 
        title="System Status"
        variant="primary"
        hoverable
      >
        <div class="space-y-2">
          <p class="body-base">Status: <span class="badge-success">Secure</span></p>
          <p class="body-small text-muted">Last scan: 2 hours ago</p>
        </div>
        <template #footer>
          <SecurityButton size="sm" variant="outline">
            Run Scan
          </SecurityButton>
        </template>
      </SecurityCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SecurityCard from '~/components/SecurityCard.vue'
import SecurityButton from '~/components/SecurityButton.vue'
import SecurityAlert from '~/components/SecurityAlert.vue'

const showAlert = ref(true)
</script>`

// React Usage Example (in Astro page)
`---
// SecurityDashboard.astro
import Layout from '../layouts/Layout.astro'
import { SecurityDashboard } from '../components/SecurityDashboard'
---

<Layout title="Security Dashboard">
  <SecurityDashboard client:load />
</Layout>`

// SecurityDashboard.jsx
`import React, { useState } from 'react'
import { SecurityCard } from './SecurityCard'
import { SecurityButton } from './SecurityButton'
import { SecurityAlert } from './SecurityAlert'
import { SecurityTable } from './SecurityTable'

export const SecurityDashboard = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'System scan completed successfully', type: 'success' }
  ])
  
  const tableColumns = [
    { key: 'service', label: 'SERVICE' },
    { key: 'status', label: 'STATUS', render: (value) => (
      <span className={\`badge-\${value === 'Active' ? 'success' : 'warning'}\`}>
        {value}
      </span>
    )},
    { key: 'lastCheck', label: 'LAST CHECK' }
  ]
  
  const tableData = [
    { id: 1, service: 'Firewall', status: 'Active', lastCheck: '2 mins ago' },
    { id: 2, service: 'VPN', status: 'Active', lastCheck: '5 mins ago' },
    { id: 3, service: 'IDS', status: 'Warning', lastCheck: '1 hour ago' }
  ]
  
  return (
    <div className="container-praxis section-padding">
      <h1 className="h1 mb-8">Security Dashboard</h1>
      
      {alerts.map(alert => (
        <SecurityAlert
          key={alert.id}
          type={alert.type}
          dismissible
          onDismiss={() => setAlerts(alerts.filter(a => a.id !== alert.id))}
        >
          {alert.message}
        </SecurityAlert>
      ))}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SecurityCard title="System Status" variant="primary" hoverable>
          <div className="space-y-2">
            <p className="body-base">
              Status: <span className="badge-success">Secure</span>
            </p>
            <p className="body-small text-muted">Last scan: 2 hours ago</p>
          </div>
          <div slot="footer">
            <SecurityButton size="sm" variant="outline">
              Run Scan
            </SecurityButton>
          </div>
        </SecurityCard>
        
        <SecurityCard title="Threats Blocked" variant="accent">
          <div className="text-center">
            <p className="h2 text-praxis-gold">247</p>
            <p className="body-small text-muted">This month</p>
          </div>
        </SecurityCard>
        
        <SecurityCard title="Active Services">
          <SecurityTable
            columns={tableColumns}
            data={tableData}
            striped
            hover
          />
        </SecurityCard>
      </div>
      
      <div className="flex gap-4">
        <SecurityButton variant="primary">
          Full System Scan
        </SecurityButton>
        <SecurityButton variant="outline">
          View Reports
        </SecurityButton>
      </div>
    </div>
  )
}`