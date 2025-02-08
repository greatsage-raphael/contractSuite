# ContractSuite

ContractSuite is a modern web application designed to streamline contract management and analysis. It provides an intuitive interface for uploading, scanning, and analyzing contract documents with advanced AI capabilities.

## Features

### Document Upload
- Support for PDF and text file formats
- Secure file handling with user-specific storage
- Real-time upload status tracking
- Integration with cloud storage

### Contract Analysis
- Automated contract data extraction
- Key information identification:
  - Entity names
  - Obligation types
  - Contract descriptions
  - Penalties and risks
  - Key dates
- Interactive document viewer
- Risk assessment visualization

### Collaboration Features
- Multi-user access control
- Signatory management
- Document sharing capabilities
- Real-time updates

## Technology Stack

- **Frontend Framework**: Next.js with TypeScript
- **UI Components**: Custom components using modern design system
- **Authentication**: Clerk
- **Database**: Supabase
- **File Storage**: Cloud storage integration

## Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn package manager
- Supabase account
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd contractsuite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Usage

1. **Document Upload**
   - Navigate to the upload page
   - Click the upload button or drag and drop your document
   - Wait for the processing to complete
   - You'll be automatically redirected to the document analysis page

2. **Document Analysis**
   - View extracted contract information
   - Access key metrics and insights
   - Add or manage signatories
   - Export analysis results

## Project Structure

```
frontend/
├── app/
│   ├── upload/     # Document upload functionality
│   ├── scan/       # Document analysis and viewing
│   └── api/        # API routes
├── components/     # Reusable UI components
├── scripts/       # Utility functions
└── public/        # Static assets
```

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact [support email/link]
