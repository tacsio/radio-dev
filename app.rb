require 'sinatra'

before do
  @radio = Radio.instance
end

get '/' do
  @current = @radio.current
  erb :index
end

get '/add' do
  url = params[:url]
  @radio.add(url)
  @radio.queue_size.to_s
end

get '/host' do
  @current = @radio.current
  erb :host
end

get '/next' do
  @current = @radio.next
end
