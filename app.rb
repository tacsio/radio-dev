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
end

get '/live' do
  @current = @radio.current
  erb :live
end

get '/next' do
  @current = @radio.next
end
