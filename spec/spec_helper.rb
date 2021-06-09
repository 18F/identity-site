require 'rspec'
require 'pathname'
require 'nokogiri'
require 'set'

Dir['spec/support/**.rb'].each { |f| require File.expand_path(f) }

RSpec.configure do |config|
  config.disable_monkey_patching!
end

REPO_ROOT = Pathname.new(File.expand_path('../..', __FILE__))
SITE_ROOT = Pathname.new(File.expand_path('../../_site', __FILE__))
SITE_URL = YAML.load_file(File.join(REPO_ROOT, '_config.yml'))['url']

def file_at(path)
  escaped_path = CGI.unescape(path)
  full_path = SITE_ROOT.join(escaped_path.gsub(%r|^/|, ''))

  if full_path.file?
    File.new(full_path.to_s)
  elsif full_path.directory?
    File.new(full_path.join('index.html').to_s)
  else
    fail "could not locate file named #{path}"
  end
end
