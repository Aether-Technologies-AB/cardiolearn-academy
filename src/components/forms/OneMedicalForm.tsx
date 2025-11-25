'use client';

import React from 'react';

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options?: Array<{ value: string; label: string }>;
  isTextarea?: boolean;
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  options,
  isTextarea = false,
  rows = 4,
}) => {
  const baseId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="form-group-onemedical">
      <label htmlFor={baseId} className="form-label-onemedical">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {isTextarea ? (
        <textarea
          id={baseId}
          className="form-textarea-onemedical"
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      ) : options ? (
        <select
          id={baseId}
          className="form-select-onemedical"
          required={required}
          value={value}
          onChange={onChange}
        >
          <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={baseId}
          type={type}
          className="form-input-onemedical"
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

interface CheckboxFieldProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  label,
  checked,
  onChange,
  required = false,
}) => {
  return (
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        id={id}
        className="form-checkbox-onemedical focus:ring-2 focus:ring-primary-blue focus:ring-opacity-20"
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  );
};

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, title, children }) => {
  const getAlertClass = (type: string) => {
    switch (type) {
      case 'success':
        return 'alert-onemedical-success';
      case 'warning':
        return 'alert-onemedical-warning';
      case 'error':
        return 'alert-onemedical-error';
      default:
        return 'alert-onemedical-info';
    }
  };

  return (
    <div className={getAlertClass(type)}>
      {title && <h4 className="font-medium mb-1">{title}</h4>}
      <div className="text-sm">{children}</div>
    </div>
  );
};

interface OneMedicalFormProps {
  title: string;
  subtitle?: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  submitButtonText?: string;
  isLoading?: boolean;
  showAlert?: {
    type: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    message: string;
  };
}

const OneMedicalForm: React.FC<OneMedicalFormProps> = ({
  title,
  subtitle,
  onSubmit,
  children,
  submitButtonText = 'Submit',
  isLoading = false,
  showAlert,
}) => {
  return (
    <div className="container-form py-8">
      <div className="card-onemedical">
        <div className="card-onemedical-header">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
          )}
        </div>
        
        <div className="card-onemedical-body">
          {showAlert && (
            <Alert type={showAlert.type} title={showAlert.title}>
              {showAlert.message}
            </Alert>
          )}
          
          <form onSubmit={onSubmit} className="form-onemedical mt-6">
            {children}
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`btn-onemedical-primary w-full justify-center ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  submitButtonText
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Demo component showcasing the One Medical styling
const OneMedicalFormDemo: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialty: '',
    experience: '',
    message: '',
    newsletter: false,
    terms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const specialtyOptions = [
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'internal-medicine', label: 'Internal Medicine' },
    { value: 'family-medicine', label: 'Family Medicine' },
    { value: 'emergency-medicine', label: 'Emergency Medicine' },
    { value: 'other', label: 'Other' },
  ];

  const experienceOptions = [
    { value: '0-2', label: '0-2 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '6-10', label: '6-10 years' },
    { value: '10+', label: '10+ years' },
  ];

  return (
    <OneMedicalForm
      title="Join Cardiocritical Academy"
      subtitle="Connect with leading cardiovascular education and advance your medical career"
      onSubmit={handleSubmit}
      submitButtonText="Start Learning"
      showAlert={{
        type: 'info',
        message: 'This form demonstrates the One Medical inspired design patterns applied to Cardiocritical Academy.',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="First Name"
          placeholder="Enter your first name"
          required
          value={formData.firstName}
          onChange={handleInputChange}
        />
        
        <FormField
          label="Last Name"
          placeholder="Enter your last name"
          required
          value={formData.lastName}
          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
        />
      </div>
      
      <FormField
        label="Email Address"
        type="email"
        placeholder="your.email@example.com"
        required
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />
      
      <FormField
        label="Phone Number"
        type="tel"
        placeholder="+1 (555) 123-4567"
        value={formData.phone}
        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Medical Specialty"
          options={specialtyOptions}
          placeholder="Select your specialty"
          required
          value={formData.specialty}
          onChange={(e) => setFormData(prev => ({ ...prev, specialty: e.target.value }))}
        />
        
        <FormField
          label="Years of Experience"
          options={experienceOptions}
          placeholder="Select experience level"
          value={formData.experience}
          onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
        />
      </div>
      
      <FormField
        label="Tell us about your interests"
        placeholder="What areas of cardiovascular medicine are you most interested in learning about?"
        isTextarea
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
      />
      
      <div className="space-y-4">
        <CheckboxField
          id="newsletter"
          label="Subscribe to our newsletter for the latest updates and educational content"
          checked={formData.newsletter}
          onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.checked }))}
        />
        
        <CheckboxField
          id="terms"
          label="I agree to the Terms of Service and Privacy Policy"
          required
          checked={formData.terms}
          onChange={(e) => setFormData(prev => ({ ...prev, terms: e.target.checked }))}
        />
      </div>
    </OneMedicalForm>
  );
};

export default OneMedicalForm;
export { FormField, CheckboxField, Alert, OneMedicalFormDemo };
