source "https://rubygems.org"

ruby File.read(".ruby-version").strip

gem "puma", ">= 5.0"
gem "rails", "~> 7.1.2"
gem "sprockets-rails"
gem "sqlite3", "~> 1.4"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "faker", "~> 3.2"

group :development, :test do
  gem "debug", platforms: %i[ mri windows ]
end

group :development, :test do
  gem "web-console"
end
