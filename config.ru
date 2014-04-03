Dir.glob('./{models/,}*.rb').each { |file| require file }

# Add all ruby files inside helpers and controllers folder and require them
run Sinatra::Application
